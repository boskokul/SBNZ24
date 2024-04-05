package sbnz.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sbnz.domain.Arrangement;
import sbnz.domain.Student;

import java.util.List;

public interface ArrangementRepository extends JpaRepository<Arrangement, Integer> {
    public Arrangement findOneByName(String name);

}
